import { ProfilePage } from "@/features/public/home/components/ProfilePage";

export const metadata = {
  title: "Futsal Court Details - Eghara Bookings",
  description: "View futsal court details, availability, and reviews",
};

export default async function FutsalProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProfilePage futsalId={id} />;
}
