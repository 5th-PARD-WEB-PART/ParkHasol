import { useForm } from "../hooks/useForm";

export default function Form() {
  const { values, handleChange, handleSubmit, logSubmittedData } = useForm({
    name: "",
    email: "",
  });

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold">
            이름:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="border p-2 w-full rounded "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">
            이메일:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          제출
        </button>
      </form>

      {/* 모든 제출된 데이터를 확인하는 버튼 */}
      <button
        onClick={logSubmittedData}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        제출된 데이터 확인
      </button>
    </div>
  );
}
