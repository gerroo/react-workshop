import Link from "next/link";
import Button from "../lib/components/Button"
export default () => {
  return (
    <div>
    <h1>
    Home{" "}
    <Link href="/profile">
      <Button><h2>profile</h2></Button>
    </Link>
    </h1>
    </div>
  );
}
