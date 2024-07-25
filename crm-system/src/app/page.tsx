import Link from 'next/link';
import Button from './components/button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <Link href="/dashboard">
        <Button>To dashboard</Button>
      </Link>
      <Link href="/companies">
        <Button>To companies</Button>
      </Link>
    </main>
  );
}
