import React from "react";

export const metadata = {
  title: "Painel do Site",
  description: "Este é o painel demonstrativo do Site",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h3>Header do Dashboard</h3>
      <br />
      {children}
    </>
  );
}
