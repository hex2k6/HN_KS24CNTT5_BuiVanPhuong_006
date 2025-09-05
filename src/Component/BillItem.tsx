import { Bill } from "../App";

interface Props {
  bill: Bill;
  onDelete: (bill: Bill) => void;
}

export default function BillItem({ bill, onDelete }: Props) {
  return (
    <tr className="border-t">
      <td className="p-3">{bill.name}</td>
      <td className="p-3">{bill.amount.toLocaleString()}</td>
      <td className="p-3">
        {bill.status === "Đã thanh toán" ? (
          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">
            {bill.status}
          </span>
        ) : (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded">
            {bill.status}
          </span>
        )}
      </td>
      <td className="p-3">
        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => onDelete(bill)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
