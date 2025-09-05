import { Bill } from "../App";
import BillItem from "./BillItem";

interface Props {
  bills: Bill[];
  onDelete: (bill: Bill) => void;
}

export default function BillList({ bills, onDelete }: Props) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Tên chủ hộ</th>
            <th className="p-3">Số tiền (VND)</th>
            <th className="p-3">Trạng thái</th>
            <th className="p-3">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <BillItem key={bill.id} bill={bill} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
