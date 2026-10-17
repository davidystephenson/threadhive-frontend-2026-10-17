import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThreadCard from "../../src/components/ThreadList/ThreadCard";

const thread = {
  _id: "t1",
  title: "A useful discussion",
  content: "Some details about the discussion.",
  author: "u1",
  subredditName: "javascript",
  upvotedBy: ["u2", "u3"],
  downvotedBy: ["u4"],
};

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("ThreadCard", () => {
  it("renders thread content, author, subreddit, and calculated vote count", () => {
    render(<ThreadCard thread={thread} onSelect={vi.fn()} />);

    expect(
      screen.getByRole("heading", { name: "A useful discussion" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Some details about the discussion."),
    ).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("r/javascript")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /back to home/i }),
    ).not.toBeInTheDocument();
  });

  it("passes the selected thread to onSelect when the card is clicked", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<ThreadCard thread={thread} onSelect={onSelect} />);

    await user.click(
      screen.getByRole("heading", { name: "A useful discussion" }),
    );

    expect(onSelect).toHaveBeenCalledWith(thread);
  });

  it("renders the back button and calls goBack when it is clicked", async () => {
    const user = userEvent.setup();
    const goBack = vi.fn();
    render(<ThreadCard thread={thread} goBack={goBack} onSelect={vi.fn()} />);

    await user.click(screen.getByRole("button", { name: /back to home/i }));

    expect(goBack).toHaveBeenCalledOnce();
  });

  it("shows an alert when either vote button is clicked", async () => {
    const user = userEvent.setup();
    const alert = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<ThreadCard thread={thread} onSelect={vi.fn()} />);

    await user.click(screen.getByRole("button", { name: "Upvote" }));
    expect(alert).toHaveBeenCalledWith("Upvote clicked!");

    await user.click(screen.getByRole("button", { name: "Downvote" }));
    expect(alert).toHaveBeenCalledWith("Downvote clicked!");
  });
});
