"use client";

type Props = {
  onAccept: () => void;
  onCancel: () => void;
};

export default function WarningModal({ onAccept, onCancel }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-xl border border-red-300 bg-red-50 p-6 shadow-lg">
        <div className="mb-3 flex items-center gap-2 text-red-700">
          <span className="text-2xl">⚠️</span>
          <h2 className="text-lg font-bold">Important Safety Notice</h2>
        </div>

        <p className="text-sm text-red-800 mb-3">
          This platform provides general guidance to help you respond to common
          fraud scenarios. It does not replace official legal or law-enforcement
          support.
        </p>

        <p className="text-sm text-red-800 mb-5">
          If you have lost money, shared OTPs, or feel threatened, immediately
          contact your bank and local authorities.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-md border border-red-300 px-4 py-2 text-sm text-red-700 hover:bg-red-100"
          >
            Cancel
          </button>

          <button
            onClick={onAccept}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
