import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { NoteInterface } from './NoteReducer';
import { NoteContext} from './NoteContext'
import { SelectContext} from './SelectContext'
import useSelected from './hooks/useSelected';


const drawerWidth = 240;

interface IProps {
    notesContext: NoteInterface[]
}



export default function SideBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const selectedNote = useSelected()

  const { notesContext }: IProps = React.useContext(NoteContext);
  const { selected, dispatch } = React.useContext(SelectContext);



  const handleNoteSelect = (id: string) => {
    dispatch({type: "added", id})
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {notesContext.map(({text, id, date}) =>{
          let color = selectedNote?.id === id ? 'lightgrey' : 'white'
          return (
          <ListItem key={id} disablePadding sx={{backgroundColor: color}}>
            <ListItemButton onClick={() => handleNoteSelect(id)}>
              <ListItemText primary={`${text.slice(0,5)}...`} />
            </ListItemButton>
          </ListItem>
        )})}
      </List>
      
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
       
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
