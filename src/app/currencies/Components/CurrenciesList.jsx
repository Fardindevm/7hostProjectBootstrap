"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import axios from "axios";
import { Timer } from "lucide-react";

export default function CurrenciesList({ initialData }) {
  const [currencies, setCurrencies] = useState(initialData);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [cooldown, setCooldown] = useState(0);
  const observerRef = useRef();

  const fetchMore = async () => {
    if (loading || cooldown > 0) return;
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 500));
      const res = await axios.get(`/api/currencies?page=${page}`);

      if (res.data.length === 0) {
        setHasMore(false);
      } else {
        const existingIds = new Set(currencies.map((coin) => coin.id));
        const uniqueNewCoins = res.data.filter((coin) => !existingIds.has(coin.id));

        if (uniqueNewCoins.length > 0) {
          setCurrencies((prev) => [...prev, ...uniqueNewCoins]);
          setPage((prev) => prev + 1);
        } else {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error("خطا در دریافت اطلاعات:", err);
      startCooldown();
    }

    setLoading(false);
  };

  function convertToPersianDate(dateStr) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("fa-IR").format(date).replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - "۰".charCodeAt(0)));
  }

  const startCooldown = () => {
    setCooldown(60);
  };

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) clearInterval(timer);
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && page <= 4 && cooldown === 0) {
          fetchMore();
        }
      },
      { threshold: 1 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMore, page, cooldown]);

  return (
    <div
      className="pb-3 mt-3 pb-xl-5 px-2 py-5 px-xl-5 d-flex flex-column gap-4 gap-xl-2  mx-auto shadow mb-3 mb-xl-5"
      style={{
        minWidth: "375px",
        maxWidth: "1096px",
        backgroundColor: "var(--currenciesList)",
        borderRadius: "20px",
      }}
    >
      <div className="table-responsive">
        <table className="table-borderless text-end w-100">
          <thead>
            <tr className="text-muted small">
              <th scope="col">#</th>
              <th scope="col" className="text-start ps-3 ps-xl-5">
                Name
              </th>
              <th scope="col" className="text-start">
                Price (USD)
              </th>
              <th scope="col">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {currencies?.map((coin, index) => (
              <tr key={coin.id} className="hover-bg-light transition">
                <td className="fw-semibold text-muted small">{index + 1}</td>
                <td className="ps-3 ps-xl-5 py-3 min-w-187 max-w-187  xl-min-w-639 d-flex align-items-center gap-2 name-column" >
                  <img src={coin.image} alt={coin.name} className="img-fluid" style={{ width: "23px", height: "24px" }} />
                  <Link
                    href={`/currencies/${coin.id}`}
                    scroll={false}
                    replace={true}
                    className="text-dark text-decoration-none hover-underline fw-medium text-start"
                    style={{ fontSize: "12px" }}
                  >
                    {coin.name} <span className="text-muted fw-bold">{coin.symbol.toUpperCase()}</span>
                  </Link>
                </td>
                <td className="fw-medium text-dark text-start price-column" style={{ fontSize: "12px" }}>
                  ${coin.current_price}
                </td>
                <td className="text-dark date-column" style={{ fontSize: "12px" }}>
                  {convertToPersianDate(coin.last_updated)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {page <= 4 && <div ref={observerRef} className="h-10" />}

      {page > 4 && (
        <div className="text-center mt-xl-3">
          <button
            aria-label="button for fetching more lists"
            onClick={fetchMore}
            disabled={loading || cooldown > 0 || !hasMore}
            className={`w-190 xl-w-342 h-44 xl-h-56 mx-auto px-4 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 transition ${loading || cooldown > 0 || !hasMore ? "bg-secondary text-light cursor-not-allowed" : "bg-primary hover-bg-info text-white cursor-pointer"
              }`}
            style={{
              width: "190px",
              height: "44px",
              fontSize: "16px",
              "@media (minWidth: 1200px)": {
                width: "342px",
                height: "56px",
              },
            }}
          >
            {loading ? (
              "در حال بارگذاری..."
            ) : cooldown > 0 ? (
              <>
                <Timer className="w-5 h-5 animate-pulse" />
                {`لطفا ${cooldown} ثانیه صبر کنید`}
              </>
            ) : hasMore ? (
              "Show More"
            ) : (
              "پایان لیست ارزها"
            )}
          </button>
        </div>
      )}

      {loading && <p className="text-center small text-muted mt-xl-2">در حال بارگذاری...</p>}
      {cooldown > 0 && (
        <div
          className="fixed-bottom start-50 translate-middle-x bg-dark text-white px-4 py-3 shadow-lg small animate-fade-in-out text-center"
          dir="rtl"
          style={{
            bottom: "16px",
            maxWidth: "90%",
            width: "400px",
            borderRadius: "25px",
            "@media (max-width: 576px)": {
              width: "320px"
            }
          }}
        >
          <div className="d-flex align-items-center justify-content-center gap-2">
            محدودیت API فعال است. لطفاً تا {cooldown} ثانیه دیگر صبر کنید.
          </div>
        </div>
      )}
    </div>
  );
}
