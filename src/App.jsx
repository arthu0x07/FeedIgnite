import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./app.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Arthur S Silva"
            content="Lorem Impsum Dolor sit amet conscctetur adiscipit eli. assumeda Odio aliquam"
          />
          <Post
            author="Arthur S Silva"
            content="Lorem Impsum Dolor sit amet conscctetur adiscipit eli. assumeda Odio aliquam"
          />
        </main>
      </div>
    </>
  );
}

export default App;
