import React, { Component } from "react";
export function FriendsRanking() {
  const friendsList = [1, 2, 3, 4, 5].map(a => <li>friend {a}</li>);
  return friendsList;
}
