// src/components/SearchCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IoPerson } from "react-icons/io5";

interface Props {
  id: number;
  name: string;
  gender: "Male" | "Female";
  avatarUrl?: string;
  weightClass?: string;
  record?: string;
}

const SearchCard: React.FC<Props> = React.memo(
  ({
    id,
    name,
    gender,
    avatarUrl,
    weightClass = "WEIGHTCLASS",
    record = "0-0-0",
    
  }) => {
    return (
      <Link to={`/fighters/${id}`} className="block w-full max-w-xs">
        <Card className="hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
          <CardContent className="flex flex-col items-center p-4 space-y-3">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={avatarUrl ?? "/logo.png"}
                alt={`${name} avatar`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/logo.png";
                }}
                className="object-cover"
              />
              <AvatarFallback className="flex items-center justify-center bg-gray-100 text-gray-500">
                <IoPerson size={32} />
              </AvatarFallback>
            </Avatar>

         
            <h2 className="font-mono text-lg font-semibold text-center">
              {name}
            </h2>
       
            <div className="flex space-x-2">
              <Badge variant="outline" className="uppercase text-xs px-2 py-1">
                {gender}
              </Badge>
              <Badge variant="default" className="uppercase text-xs px-2 py-1">
                {weightClass}
              </Badge>
              <Badge variant="secondary" className="uppercase text-xs px-2 py-1">
                {record}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }
);

export default SearchCard;
