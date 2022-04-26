import { Container, Content, HeaderMenu } from "./styles";
export function Details() {
  return (
    <Container>
      <HeaderMenu>
        <ul>
          <li className="contentSelect">About</li>
          <li>Base Stats</li>
          <li>Moves</li>
          <li>Evolution</li>
        </ul>
      </HeaderMenu>

      <Content>
        <div className="content-about">
          <table>
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
          </table>
        </div>
        <div className="contentBase"></div>
      </Content>
    </Container>
  );
}
