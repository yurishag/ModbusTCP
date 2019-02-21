import modbusSerial from 'modbus-serial';
import { TcpPortOptions } from 'modbus-serial/ModbusRTU';



class ModbusTCP extends modbusSerial{
    private host: string;
    private port: TcpPortOptions;
    private timeout: number;

    constructor(host: string, port: TcpPortOptions, timeout: number) {
        super();
        this.host = host;
        this.port = port;
        this.timeout = timeout
    }

    public async connect() {
        try {

            await this.connectTCP(this.host, this.port)

            // this.setTimeout(this.timeout);

        } catch (err) {
            console.error(err.message);
        }
    }

    public async readModbusCoils(startAddress:number, offset:number) {
        let data;
        try {

            data = await this.readCoils(startAddress, offset)

        } catch (err) {
            console.error(err.message);
        }
        
        return data;
    }

    public async readModbusHoldingRegisters(startAddress:number, offset:number) {
        let data;
        try {
            data = await this.readHoldingRegisters(startAddress, offset)
        } catch (err) {
            console.error(err.message);
        }
        
        return data;
    }

    public async readModbusDiscreteInputs(startAddress:number, offset:number) {
        let data;
        try {
            data = await this.readDiscreteInputs(startAddress, offset);
        } catch (err) {
            console.error(err.message);
        }
        return data;
    }

    public async readModbusInputRegisters(startAddress:number, offset:number) {
        let data;
        try {
            data = await this.readInputRegisters(startAddress, offset);
        } catch (err) {
            console.error(err.message);
        }
        return data;
    }

    public async writeModbusCoil(startAddress:number, state:boolean){
        let data;
        try {
            data = await this.writeCoil(startAddress, state);
        } catch (err) {
            console.error(err.message);
        }
        return data;
    }

    public async writeModbusCoils(startAddress:number, states:boolean[]){
        let data;
        try {
            data = await this.writeCoils(startAddress, states)
        } catch (err) {
            console.error(err.message);
        }
        return data;
    }

    public async writeModbusRegister(startAddress:number, value:number){
        let data;
        try {
            data = await this.writeRegister(startAddress, value);
        } catch (err) {
            console.error(err.message);
        }
        return data;
    }

    public async writeModbusRegisters(startAddress:number, values:number[]){
        let data;
        try {
            data = await this.writeRegisters(startAddress, values);
        } catch (err) {
            console.error(err.message);
        }
        return data;
    }    
}

export default ModbusTCP;
