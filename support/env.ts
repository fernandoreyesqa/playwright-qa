import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const environment = process.env.ENV || 'qa';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${environment}`) });

// Generar environment.properties para Allure
const allureResultsDir = path.resolve(process.cwd(), 'allure-results');
if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir);
}

fs.writeFileSync(
    path.join(allureResultsDir, 'environment.properties'),
    `Environment=${environment.toUpperCase()}\nURL=${process.env.URL}\nBrowser=Chromium`
);