```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: The empty dependency array ensures
    // the effect runs only once after the component mounts.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```