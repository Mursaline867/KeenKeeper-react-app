import { useEffect, useState } from 'react';

export function useFriends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const loadFriends = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 900));
        const response = await fetch('/assets/friends.json');
        if (!response.ok) throw new Error('Could not load friend data.');
        const data = await response.json();
        if (mounted) setFriends(data);
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadFriends();
    return () => {
      mounted = false;
    };
  }, []);

  return { friends, loading, error };
}
