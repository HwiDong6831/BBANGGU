import type { ReservationType } from "../../types/bakery"

export const mockReservations: ReservationType[] = [
  {
    reservation_id: 1,
    user_id: 101,
    bakery_id: 1,
    bread_package_id: 1,
    quantity: 2,
    total_price: 16000,
    reserved_pickup_time: "2024-01-14T17:00:00Z",
    pickup_at: "5:00 pm",
    created_at: "2023-12-31T23:00:00Z",
    status: "completed",
  },
  {
    reservation_id: 2,
    user_id: 101,
    bakery_id: 2,
    bread_package_id: 2,
    quantity: 1,
    total_price: 10000,
    reserved_pickup_time: "2024-02-01T18:00:00Z",
    pickup_at: "18:00",
    created_at: "2024-01-31T22:00:00Z",
    cancelled_at: "2024-02-01T17:30:00Z",
    status: "cancelled",
  },
] 