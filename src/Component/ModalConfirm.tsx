import { Bill } from "../App";

interface Props {
  bill: Bill;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ModalConfirm({ bill, onCancel, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Bạn có chắc muốn xóa hóa đơn của <b>{bill.name}</b>?</p>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded"
          >
            Hủy
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
