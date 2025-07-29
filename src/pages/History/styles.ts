import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    table-layout: fixed;

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
        width: 50%;
      }

      &:nth-child(2) {
        width: 20%;
      }

      &:nth-child(3) {
        width: 20%;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
        width: 10%;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      word-wrap: break-word;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:nth-child(2) {
        width: 20%;
        text-align: center;
      }

      &:nth-child(3) {
        width: 20%;
        text-align: center;
      }

      &:last-child {
        width: 10%;
        padding-right: 1.5rem;
        text-align: center;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span.withConfig({
  shouldForwardProp: (prop) => !["statusColor"].includes(prop),
})<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
