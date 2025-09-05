import { useState } from "react";
import Header from "./components/Header";
import BillForm from "./components/BillForm";
import BillList from "./components/BillList";
import ModalConfirm from "./components/ModalConfirm";

export interface Bill {
  id: number;
  name: string;
  amount: number;
  status: "Đã thanh toán" | "Chưa thanh toán";
}

export default function App() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [billToDelete, setBillToDelete] = useState<Bill | null>(null);

  const addBill = (bill: Bill) => {
    setBills([...bills, bill]);
  };

  const confirmDelete = (bill: Bill) => {
    setBillToDelete(bill);
  };

  const deleteBill = () => {
    if (billToDelete) {
      setBills(bills.filter((b) => b.id !== billToDelete.id));
      setBillToDelete(null);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />
      <BillForm onAdd={addBill} />
      <BillList bills={bills} onDelete={confirmDelete} />
      {billToDelete && (
        <ModalConfirm
          bill={billToDelete}
          onCancel={() => setBillToDelete(null)}
          onConfirm={deleteBill}
        />
      )}
    </div>
  );
}
