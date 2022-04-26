import { useState } from "react";
import { Container, Content, HeaderMenu } from "./styles";
export function Details() {
  const [selectTab, setSelectTab] = useState(1);

  const toggled = (value: number) => {
    setSelectTab(value);
  };
  return (
    <Container>
      <HeaderMenu>
        <ul>
          <li
            className={selectTab === 1 ? "contentSelect" : ""}
            onClick={() => toggled(1)}
          >
            About
          </li>
          <li
            className={selectTab === 2 ? "contentSelect" : ""}
            onClick={() => toggled(2)}
          >
            Base Stats
          </li>
          <li
            className={selectTab === 3 ? "contentSelect" : ""}
            onClick={() => toggled(3)}
          >
            Moves
          </li>
          <li
            className={selectTab === 4 ? "contentSelect" : ""}
            onClick={() => toggled(4)}
          >
            Evolution
          </li>
        </ul>
      </HeaderMenu>

      <Content>
        <div
          className="contentAbout contentBox"
          style={selectTab === 1 ? { display: "" } : { display: "none" }}
        >
          <table>
            <tbody>
              <tr>
                <td>Species</td>
                <td>Seed</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>2'3.6 (0.70cm)</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>15.2lbs (6.9 kg)</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>Overgrow, Chlorophyl</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <hr />
                </td>
              </tr>
              <tr>
                <th>Breeding</th>
              </tr>
              <tr>
                <td>Gender</td>
                <td>87.5% 12.5%</td>
              </tr>

              <tr>
                <td>Egg Groups</td>
                <td>Monster</td>
              </tr>
              <tr>
                <td>Egg Cycle</td>
                <td>Grass</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <hr />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="contentBase contentBox"
          style={selectTab === 2 ? { display: "" } : { display: "none" }}
        >
          <table>
            <tbody>
              <tr>
                <td>HP</td>
                <td>45</td>
                <td>
                  <hr className="baseValor" />
                  <hr
                    className="currentValor"
                    style={{ width: "calc(100% * 45/255)" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>60</td>
                <td>
                  <hr className="baseValor" />
                  <hr
                    className="currentValor"
                    style={{ width: "calc(100% * 60/255)" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>48</td>
                <td>
                  <hr className="baseValor" />
                  <hr
                    className="currentValor"
                    style={{ width: "calc(100% * 48/255)" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Sp. Atk</td>
                <td>65</td>
                <td>
                  <hr className="baseValor" />
                  <hr
                    className="currentValor"
                    style={{ width: "calc(100% * 65/255)" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Sp. Def</td>
                <td>65</td>
                <td>
                  <hr className="baseValor" />
                  <hr
                    className="currentValor"
                    style={{ width: "calc(100% * 65/255)" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>45</td>
                <td>
                  <hr className="baseValor" />
                  <hr
                    className="currentValor"
                    style={{ width: "calc(100% * 45/255)" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>317</td>
                <td>
                  <hr className="baseValor" />
                  <hr
                    className="currentValor"
                    style={{ width: "calc(100% * 317/6/255)" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="contentEvolution contentBox"
          style={selectTab === 3 ? { display: "" } : { display: "none" }}
        ></div>
        <div
          className="contentMoves contentBox"
          style={selectTab === 4 ? { display: "" } : { display: "none" }}
        ></div>
      </Content>
    </Container>
  );
}
