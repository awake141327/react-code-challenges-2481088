import { useEffect} from 'react';

export default function WindowEvent () {

  useEffect(() => {
    const handleDblClick = () => alert("Mouse Pressed");
    window.addEventListener("dblclick", handleDblClick);

    return () => window.removeEventListener("dblClick", handleDblClick);
  }, [])

  return (
    <h2>Window event active</h2>
  )
}
