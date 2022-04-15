import { Button, Container } from "./styles";
import pokeSearchImg from "../../assets/icons8-pokebola-48.png";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { motion, useAnimation } from "framer-motion";
import bg from "../../assets/container_bg.png";

const svgPath = {
  hidden: {
    opacity: 0,
    y: -20,
    x: -20,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
  },
};

const transition = {
  default: { duration: 4, ease: "easeInOut" },
  delay: 0.5,
};

export function Header() {
  const controleAnimate = useAnimation();
  const { search, setSearch, searchPokemon } = useContext(SearchContext);

  function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      searchPokemon();
      controleAnimate.start({
        rotate: [0, 90, -90, 360, -360],
      });
    }
  }

  function handleClick() {
    searchPokemon();
    controleAnimate.start({
      rotate: [0, 90, -90, 360, -360],
    });
  }

  return (
    <Container
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <motion.div className="logoContainer">
        <motion.svg
          xmlns="http://www.w3.org/2000/motion.svg"
          width="120"
          height="100%"
          version="1"
          viewBox="30 20 460 480"
          variants={svgPath}
          initial="hidden"
          animate="visible"
          transition={transition}
        >
          <motion.circle fill="white" cx="220" cy="290" r="130" />

          <motion.path
            fill="#731963"
            d="M1215 4744c17-275 54-1287 48-1297-4-7-36-50-72-97-107-141-240-348-291-454-55-114-100-279-126-456-24-169-16-430 19-560 47-178 116-314 262-509 358-481 815-678 1355-585 230 40 439 122 586 232 231 172 455 484 552 767 51 148 107 456 147 805 14 120 18 137 39 155 13 11 259 225 545 475l522 455-724 5-724 5 63 100c35 55 60 101 56 103-4 1-84-9-177-22-93-14-171-23-173-21-2 1 42 86 97 187 128 236 123 220 69 203-24-7-193-59-377-114-378-114-338-112-407-16-21 30-42 55-45 55s-12-24-19-54-16-60-21-67c-5-9-43 19-127 94-66 59-123 107-126 107s-6-50-6-111c0-66-4-109-10-107-5 2-215 185-466 408s-461 407-466 409-7-38-3-95zm584-1718l72-229-29-31c-68-71-105-156-68-156 17 0 102 65 115 87 7 13 17-8 43-92l35-110-22-3c-36-5-153 26-219 58-196 93-238 280-120 530 43 91 107 192 115 182 3-4 39-110 78-236zm1336-273c-31-229-131-420-250-478-60-29-160-32-242-7-69 21-195 90-195 107-1 9 160 114 174 115 4 0 10-17 13-37 11-71 26-113 40-113 20 0 36 59 36 137v69l207 126c114 70 211 127 215 127 5 1 5-20 2-46zm-1772-193c17-25 53-71 80-102l49-58-37-162c-19-90-39-172-43-182-12-28-78 114-107 229-24 94-45 271-45 380v60l36-60c19-33 49-80 67-105zm236-254c43-35 111-83 150-106 42-25 71-49 71-59 0-23-81-375-89-383-12-13-166 100-235 171-54 57-67 76-62 94 3 12 22 95 43 185 20 89 38 162 40 162 1 0 38-29 82-64zm1531-162c0-13-117-151-190-224-75-76-187-167-195-159-5 6 58 286 67 294 3 3 48 17 99 30 52 13 119 33 149 44 62 22 70 24 70 15zm-1184-40c85-32 204-61 297-73 43-5 80-11 82-13s-59-278-89-404c-5-19-10-20-73-12-70 8-145 27-228 58-51 18-166 68-172 74-2 1 17 92 42 200 25 109 45 200 45 203s8 2 18-2c9-4 45-18 78-31zm795-215l-37-160-54-30c-80-44-216-88-304-97-43-5-79-6-80-3-2 3 17 98 43 211l47 205 140 7c76 4 162 12 189 17 103 18 97 33 56-150z"
            transform="matrix(.1 0 0 -.1 0 512)"
          ></motion.path>
          <motion.path
            fill="#731963"
            d="M543 3937c3-8 8-44 12-80l7-67-78-1c-80 0-145-16-147-34 0-5 24-27 54-47 85-58 109-78 109-95 0-8-18-32-40-54s-40-43-40-48c0-4 30-28 66-52 98-66 170-169 275-392l37-79 43 74c56 96 124 198 222 331l80 108-7 62c-4 42-11 66-23 75-63 47-328 204-429 253-124 60-150 69-141 46zM3826 2589c-24-190-70-500-86-574-10-49-17-92-14-94 2-2 150 55 330 128 201 81 339 131 361 131 19 0 47-9 62-20l28-19 12 57c7 31 14 64 17 72 2 8 40 35 85 60l81 44-74 36c-40 19-75 36-76 37-2 1 8 22 23 47l26 45-28 14c-83 42-253 66-535 74l-206 6-6-44zM666 1725c-44-128-27-281 49-440 34-72 62-111 134-189 50-53 91-103 91-109 0-7 21-38 46-70l46-59 22 21 23 21 51-51c28-28 57-49 64-47 8 3 14 24 16 51 3 53 7 54 70 30 34-13 45-14 55-4 9 10 0 23-43 59-93 77-272 264-335 351-127 172-197 295-258 451l-13 35-18-50zM3215 1032c-206-193-391-287-700-357-59-13-109-25-110-27-2-2 25-52 60-111 34-60 75-135 90-167 17-36 38-63 54-71 14-7 70-14 123-17 135-6 194 13 268 87 179 179 329 534 293 692l-8 37-70-66zM1787 668c91-125 191-221 274-264l28-14 60 119 60 118-110 7c-61 3-156 15-212 26-121 24-112 23-100 8z"
            transform="matrix(.1 0 0 -.1 0 512)"
          ></motion.path>
        </motion.svg>
        <h1>Pokédex</h1>
      </motion.div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Digite o nome ou número do Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          onKeyDown={handleSearch}
        />
        <Button
          whileTap={{ scale: 1 }}
          animate={controleAnimate}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
          type="button"
          onClick={handleClick}
        >
          <img src={pokeSearchImg} alt="Search"></img>
        </Button>
      </div>
    </Container>
  );
}
