import Link from "next/link";
import Button from "../lib/components/Button"
export default () => {
  return (
    <div>
    <h1>
    Profile{" "}
    <Link href="/">
      <Button><h2>home</h2></Button>
    </Link>
    </h1>
    </div>
  );
}
