import React from "react";
import { render, screen } from "@testing-library/react";

import { bethZell, calvinHobbes, isaiahWilliams } from "mocks/members";
import MemberList from "./MemberList";

describe("MemberList component", () => {
  describe("empty list", () => {
    beforeEach(() => {
      render(<MemberList members={[]} />);
    });
    it("renders empty message for empty list", () => {
      screen.getByText("No member records loaded.");
    });
  });

  describe("unread message tag", () => {
    it("displays X Unread Messages when the member has unread messages", () => {
      render(<MemberList members={[calvinHobbes]} />);
      screen.getByText("2 Unread Messages");
    });
    it("displays 1 Unread Message  when the member has just one unread message", () => {
      render(<MemberList members={[isaiahWilliams]} />);
      screen.getByText("1 Unread Message");
    });
    it("displays no unread message count when the member has no unread messages", () => {
      render(<MemberList members={[bethZell]} />);
      expect(screen.queryByText(/Unread Message/)).toBeNull();
    });
  });
});
