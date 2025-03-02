import "./App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="min-h-dvh font-jakarta bg-background text-text-primary">
      <Header />
      <div className="flex flex-col items-center gap-10 px-4 pt-20 pb-10">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Shooort</h1>
          <span className="text-text-secondary">
            The link shortener with a long name
          </span>
        </div>

        <Forms />
        <ListItems />

        {/* {shortenedLinks.length > 0 ? (
          <Table
            shortenedLinks={shortenedLinks}
            highlight={highlight}
            // urlAPI={urlAPI}
          />
        ) : null} */}
      </div>
    </div>
  );
}

export default App;
