import StstusLabel, { Status } from "./components/status-lable";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StstusLabel status={Status.Active}>Active</StstusLabel>
      <StstusLabel status={Status.NotActive}>Not active</StstusLabel>
      <StstusLabel status={Status.Pending}>Pending</StstusLabel>
      <StstusLabel status={Status.Suspended}>Suspended</StstusLabel>
    </main>
  );
}
