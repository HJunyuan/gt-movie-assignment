import { useHistory, useLocation } from "react-router-dom";
import { Navbar, Nav, Icon, Affix } from "rsuite";

import { Container } from "../Container";

function Menu() {
  const history = useHistory();
  const { pathname } = useLocation();

  const navItems = () => {
    /**
     * Only display back button if:
     * - Not root pathname
     * - There is history
     */
    if (pathname !== "/" && history.length > 0) {
      return (
        <Nav.Item
          icon={<Icon icon="angle-left" />}
          onClick={() => history.goBack()}
        >
          Return to previous page
        </Nav.Item>
      );
    } else {
      /* Display main menu */
      return <Nav.Item icon="🎬" />;
    }
  };

  return (
    <Affix>
      <Navbar>
        <Container>
          <Nav>{navItems()}</Nav>
        </Container>
      </Navbar>
    </Affix>
  );
}

export { Menu };
