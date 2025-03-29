// components/RoomCard.tsx
import { Star, Users } from "lucide-react";

interface Room {
  name: string;
  price: string;
  img: string;
}

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="rounded-xl shadow-md hover:shadow-lg overflow-hidden w-full max-w-md bg-white transition-all duration-300 transform hover:scale-105 group">
      <div className="relative">
        <img
          src={room.img}
          alt={room.name}
          className="w-auto h-72 object-cover transition-all duration-300 group-hover:brightness-75"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-[var(--tertiary)] mb-1">Breakfast included</p>
        <h2 className="text-lg font-semibold mb-2">{room.name}</h2>
        <p className=" mb-3">₱ {room.price}/night</p>
        <hr className="my-2 border-[var(--muted)]" />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            2 Guests + 1 Child
          </div>
          <div className="flex gap-1 text-[var(--tertiary)]">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={16}
                fill={i <= 4 ? "currentColor" : "none"}
                strokeWidth={1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
