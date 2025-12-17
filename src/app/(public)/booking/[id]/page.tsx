import { BookingPage } from '@/features/booking';

export const metadata = {
  title: 'Complete Your Booking - Eghara Bookings',
  description: 'Complete your futsal court booking',
};

export default async function Booking({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <BookingPage futsalId={id} />;
}
