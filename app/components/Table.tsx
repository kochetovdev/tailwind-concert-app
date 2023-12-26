const Table = () => {
  return (
    <article className="max-w-6xl mx-auto">
      <h2 className="mt-20">Tickets</h2>
      <table className="mt-5 table w-full border border-zinc-500 border-collapse">
        <thead className="text-lg font-bold">
          <tr>
            <th className="border border-zinc-500 p-3">Tickets</th>
            <th className="border border-zinc-500 p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">
              Single day ticket
            </td>
            <td className="border border-zinc-500 py-2 px-3">30$</td>
          </tr>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">7 day ticket</td>
            <td className="border border-zinc-500 py-2 px-3">100$</td>
          </tr>
        </tbody>
        <caption className="caption-bottom font-semibold">Once they&apos;re gone they&apos;re gone</caption>
      </table>
    </article>
  );
};

export default Table;
