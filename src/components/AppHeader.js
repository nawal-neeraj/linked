import React, { Component } from 'react';
import { Header } from 'native-base';
import { AppTheme } from '../Themes/AppThemes'

export const AppHeader = ({ children }) => {
    return (

        <Header style={{ backgroundColor: AppTheme.primary[900] }} translucent={false} androidStatusBarColor={AppTheme.tertiary[700]}>
            {children}
        </Header>
    )
}