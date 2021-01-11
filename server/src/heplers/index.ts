import chalk from 'chalk';

export const logError = (error: any) => {
    if(error)
        console.log(chalk.bgRed(`✖ Error: ${error}`));
}