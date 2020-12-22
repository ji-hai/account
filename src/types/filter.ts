import Vue from 'vue';
interface Result { valid: boolean; message: string; }
export interface Filter extends Vue {
  conditions: Record<string, string>;
  validate(): Result;
  load(): Promise<void>;
  selectDevice(deviceId: string, customerId?: number): void;
}
