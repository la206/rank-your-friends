import React, { Component } from "react";
import { Friend } from "./friend/Friend.js";
export function FriendsRanking() {
  const friendsList = [1, 2, 3, 4, 5].map(a => (
    <li>
      <Friend name="Juan" />
    </li>
  ));
  return friendsList;
}
