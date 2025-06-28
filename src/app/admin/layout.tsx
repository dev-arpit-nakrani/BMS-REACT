import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - BMS",
  description: "Business Management System Admin Panel",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}