import "./styles.css";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

export default function App() {
  return (
    <div className="body">
      <div className="cards">
        <Card>
          <Content />
        </Card>
        <Card>
          <Content1 />
        </Card>
        <Card>
          <Content2 />
        </Card>
      </div>
    </div>
  );
}
function Content() {
  return (
    <div className="boxmodal">
      <Typography variant="h6" color="textSecondary">
        FREE
      </Typography>
      <Typography component="h2" variant="h3" color="textPrimary">
        $0<span className="textinline">/month </span>
      </Typography>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Single User" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="5GB Storage" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Unlimited Public Projects" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Community Access" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ClearIcon />
        </ListItemIcon>
        <ListItemText primary="Unlimited Private Projects" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ClearIcon />
        </ListItemIcon>
        <ListItemText primary="Free Subdomain" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ClearIcon />
        </ListItemIcon>
        <ListItemText primary="Monthly Status Reports" />
      </ListItem>
      <button className="button1">BUTTON</button>
    </div>
  );
}
function Content1() {
  return (
    <div className="boxmodal">
      <Typography variant="h6" color="textSecondary">
        PLUS
      </Typography>
      <Typography component="h2" variant="h3" color="textPrimary">
        $9<span className="textinline">/month </span>
      </Typography>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="5 Users" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="50GB Storage" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Unlimited Public Projects" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Community Access" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Unlimited Private Projects" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Free Subdomain" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ClearIcon />
        </ListItemIcon>
        <ListItemText primary="Monthly Status Reports" />
      </ListItem>
      <button className="button1">BUTTON</button>
    </div>
  );
}
function Content2() {
  return (
    <div className="boxmodal">
      <Typography variant="h6" color="textSecondary">
        PRO
      </Typography>
      <Typography component="h2" variant="h3" color="textPrimary">
        $49<span className="textinline">/month </span>
      </Typography>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Unlimited  Users" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="150GB Storage" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Unlimited Public Projects" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Community Access" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Unlimited Private Projects" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Unlimited Free Subdomain" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Monthly Status Reports" />
      </ListItem>
      <button className="button1">BUTTON</button>
    </div>
  );
}
