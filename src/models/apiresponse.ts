import { Coord } from "./coord";
import { Weather } from "./weather";
import { Main } from "./main";
import { Wind } from "./wind";
import { Clouds } from "./clouds";
import { Sys } from "./sys";

export class ApiResponse {

    public id: number;
    public name: string;
    public cod: number;
    public base: string;
    public visibility: number;
    public dt: number;
    public coord: Coord;
    public weather: Array<Weather> = new Array<Weather>();
    public main: Main;
    public wind: Wind;
    public clouds: Clouds;
    public sys: Sys;

}