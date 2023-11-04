import React from 'react';
import CartWidget from './CartWidget';
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <div>
        <Flex>
  <Box p='4'>
    <h3>Mamba Design</h3>
  </Box>
  <Spacer/>
    <Menu>
        <MenuButton >
            Categorias
        </MenuButton>
        <MenuList>
            <MenuItem>Todos los productos</MenuItem>
            <MenuItem>Ropa de Hombres</MenuItem>
            <MenuItem>Ropa de Mujeres</MenuItem>
            <MenuItem>Zapatillas</MenuItem>
        </MenuList>
    </Menu>
  <Spacer/>
  <Box p='4'>
  <CartWidget/>
  </Box>
</Flex>
    </div>
  );
}

export default Navbar;

