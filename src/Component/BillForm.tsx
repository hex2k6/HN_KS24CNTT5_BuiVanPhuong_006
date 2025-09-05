import { useState } from "react";
import { type Bill } from "../App";

interface Props {
  onAdd: (bill: Bill) => void;
}

export default function BillForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<"Đã thanh toán" | "Chưa thanh toán">("Chưa thanh toán");

  const handleSubmit = () => {
    if (!name.trim() || !amount) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const newBill: Bill = {
      id: Date.now(),
      name,
      amount: Number(amount),
      status,
    };
    onAdd(newBill);
    setName("");
    setAmount("");
    setStatus("Chưa thanh toán");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 flex gap-4">
      <input
        className="border p-2 rounded w-1/3"
        placeholder="Tên chủ hộ"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 rounded w-1/3"
        placeholder="Số tiền"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value as "Đã thanh toán" | "Chưa thanh toán")}
      >
        <option>Chưa thanh toán</option>
        <option>Đã thanh toán</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Thêm
      </button>
    </div>
  );
}
