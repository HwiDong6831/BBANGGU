import type { ReservationType } from "../../types/bakery"

export const mockReservations: ReservationType[] = [
  {
    reservationId: 1,
    userId: 101,
    bakeryId: 1,
    breadPackageId: 1,
    quantity: 2,
    totalPrice: 16000,
    reservedPickupTime: "2024-01-14T17:00:00+09:00",
    pickupAt: "17:00",
    createdAt: "2023-12-31T23:00:00Z",
    status: "completed",
  },
  {
    reservationId: 2,
    userId: 101,
    bakeryId: 2,
    breadPackageId: 2,
    quantity: 1,
    totalPrice: 10000,
    reservedPickupTime: "2024-02-01T18:00:00Z",
    pickupAt: "18:00",
    createdAt: "2024-01-31T22:00:00Z",
    cancelledAt: "2024-02-01T17:30:00Z",
    status: "cancelled",
  },
  {
    reservationId: 3,
    userId: 101,
    bakeryId: 3,
    breadPackageId: 2,
    quantity: 1,
    totalPrice: 10000,
    reservedPickupTime: "2024-02-01T18:00:00Z",
    pickupAt: "18:00",
    createdAt: "2024-01-31T22:00:00Z",
    cancelledAt: "2024-02-01T17:30:00Z",
    status: "pending",
  },
] 