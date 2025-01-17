import { sideLinks } from "../constants";

const Sidebar = () => {
  return (
    <section>
      <div className="bg-primary flex flex-col h-screen">
        <div className={`px-10 py-5`}>
          <ul>
            <li className="text-2xl text-white font-bold py-5">
              <h1>Schedule Manager</h1>
            </li>
            <li className="pb-10">
              <hr />
            </li>
            {sideLinks.map((side) => (
              <li key={side.id} className="text-white py-7 text-xl text-text">
                <a href="#" className="hover:text-[#9CAFAA]">
                  {side.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
