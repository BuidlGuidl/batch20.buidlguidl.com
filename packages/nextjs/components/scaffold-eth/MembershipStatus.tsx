"use client";

import { Address, zeroAddress } from "viem";
import { CheckBadgeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface MembershipStatusProps {
  address: Address;
}

export const MembershipStatus = ({ address }: MembershipStatusProps) => {
  const { data: isAllowListed } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: contractAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  const isCheckedIn = contractAddress && contractAddress !== zeroAddress;

  if (!isAllowListed) return null;

  return (
    <div className="flex items-center mr-1">
      <div
        className="tooltip tooltip-bottom"
        data-tip={isCheckedIn ? "Batch Member - Checked In" : "Batch Member - Not Checked In"}
      >
        <div className="flex items-center">
          {isCheckedIn ? (
            <CheckBadgeIcon className="h-4 w-4 text-success" />
          ) : (
            <UserCircleIcon className="h-4 w-4 text-warning" />
          )}
        </div>
      </div>
    </div>
  );
};
