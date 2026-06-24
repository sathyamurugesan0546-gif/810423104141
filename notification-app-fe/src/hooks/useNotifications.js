import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(page = 1, filter = "") {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await fetchNotifications(
          page,
          10,
          filter
        );

        setNotifications(data.notifications || []);
        setTotal(data.notifications?.length || 0);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, filter]);

  const totalPages = Math.max(1, Math.ceil(total / 10));

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}