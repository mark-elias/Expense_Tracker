function TabContainer() {
  return (
    <div className="flex gap-1 my-5">
      <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded hover:bg-gray-100">
        Default
      </button>
      <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded hover:bg-gray-100">
        A-Z
      </button>
      <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded hover:bg-gray-100">
        $$$
      </button>
      <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded hover:bg-gray-100">
        Date
      </button>
    </div>
  );
}

export default TabContainer;
