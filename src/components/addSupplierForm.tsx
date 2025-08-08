import React from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

interface AddSupplierFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  form: any;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (name: string, value: string) => void;
  handleCheckbox: (checked: boolean) => void;
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddSupplier: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function AddSupplierForm({
  open,
  setOpen,
  form,
  handleInput,
  handleSelect,
  handleCheckbox,
  handleFile,
  handleAddSupplier,
}: AddSupplierFormProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="p-6 w-[70vw] max-w-none overflow-y-auto min-w-[70vw]">
        <SheetHeader>
          <SheetTitle>Add Supplier</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleAddSupplier} className="space-y-6 mt-6">

          {/* SUPPLIER DETAILS */}
          <h3 className="text-lg font-semibold text-blue-600">Supplier Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Supplier Type *</Label>
              <Select onValueChange={(val) => handleSelect("supplierType", val)}>
                <SelectTrigger><SelectValue placeholder="Select Supplier Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="manufacturer">Manufacturer</SelectItem>
                  <SelectItem value="distributor">Distributor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Supplier Name *</Label>
              <Input name="supplierName" value={form.supplierName} onChange={handleInput} required />
            </div>
            <div>
              <Label>GST No. *</Label>
              <Input name="gstNo" value={form.gstNo} onChange={handleInput} required />
            </div>
            <div>
              <Label>PAN No. *</Label>
              <Input name="panNo" value={form.panNo} onChange={handleInput} required />
            </div>
            <div>
              <Label>Type of Organization *</Label>
              <Select onValueChange={(val) => handleSelect("organizationType", val)}>
                <SelectTrigger><SelectValue placeholder="Select Type of Organisation" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="pvt">Private Ltd</SelectItem>
                  <SelectItem value="llp">LLP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Currency Type *</Label>
              <Select onValueChange={(val) => handleSelect("currencyType", val)}>
                <SelectTrigger><SelectValue placeholder="Select Currency Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="inr">INR</SelectItem>
                  <SelectItem value="usd">USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Shipping Type *</Label>
              <Select onValueChange={(val) => handleSelect("shippingType", val)}>
                <SelectTrigger><SelectValue placeholder="Select Shipping Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="domestic">Domestic</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Website URL</Label>
              <Input name="websiteUrl" value={form.websiteUrl} onChange={handleInput} />
            </div>
            <div>
              <Label>Mobile *</Label>
              <Input name="mobile" value={form.mobile} onChange={handleInput} required />
            </div>
            <div>
              <Label>Email *</Label>
              <Input name="email" value={form.email} onChange={handleInput} required />
            </div>
            <div>
              <Label>Contact Person *</Label>
              <Input name="contactPerson" value={form.contactPerson} onChange={handleInput} required />
            </div>
          </div>

          {/* BUSINESS ADDRESS DETAILS */}
          <h3 className="text-lg font-semibold text-blue-600 mt-8">Business Address Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Business Address Line 1 *</Label>
              <Input name="businessAddress1" value={form.businessAddress1} onChange={handleInput} required />
            </div>
            <div>
              <Label>Business Address Line 2</Label>
              <Input name="businessAddress2" value={form.businessAddress2} onChange={handleInput} />
            </div>
            <div>
              <Label>Country *</Label>
              <Select onValueChange={(val) => handleSelect("businessCountry", val)}>
                <SelectTrigger><SelectValue placeholder="Please Select Country" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>State *</Label>
              <Select onValueChange={(val) => handleSelect("businessState", val)}>
                <SelectTrigger><SelectValue placeholder="Please Select State" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="state1">State 1</SelectItem>
                  <SelectItem value="state2">State 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>City *</Label>
              <Input name="businessCity" value={form.businessCity} onChange={handleInput} required />
            </div>
            <div>
              <Label>Pincode *</Label>
              <Input name="businessPincode" value={form.businessPincode} onChange={handleInput} required />
            </div>
          </div>

          {/* SHIPPING ADDRESS DETAILS */}
          <h3 className="text-lg font-semibold text-blue-600 mt-8">Shipping Address Details</h3>
          <div className="flex items-center gap-4">
          {/* <Checkbox
  checked={form.sameAsBilling}
  onCheckedChange={handleCheckbox}
  className="border border-black rounded-sm w-4 h-4 flex items-center justify-center"
>
  <Check className="w-3 h-3 text-white" />
</Checkbox> */}
<input
  type="checkbox"
  checked={form.sameAsBilling}
  onChange={handleCheckbox}
/>

          <span>  Same as Billing Address</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <Label>Shipping Address Line 1 *</Label>
              <Input name="shippingAddress1" value={form.shippingAddress1} onChange={handleInput} required />
            </div>
            <div>
              <Label>Shipping Address Line 2</Label>
              <Input name="shippingAddress2" value={form.shippingAddress2} onChange={handleInput} />
            </div>
            <div>
              <Label>Country *</Label>
              <Select onValueChange={(val) => handleSelect("shippingCountry", val)}>
                <SelectTrigger><SelectValue placeholder="Please Select Country" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>State *</Label>
              <Select onValueChange={(val) => handleSelect("shippingState", val)}>
                <SelectTrigger><SelectValue placeholder="Please Select State" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="state1">State 1</SelectItem>
                  <SelectItem value="state2">State 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>City *</Label>
              <Input name="shippingCity" value={form.shippingCity} onChange={handleInput} required />
            </div>
            <div>
              <Label>Pincode *</Label>
              <Input name="shippingPincode" value={form.shippingPincode} onChange={handleInput} required />
            </div>
          </div>

          {/* DOCUMENTS */}
          <h3 className="text-lg font-semibold text-blue-600 mt-8">Documents</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Upload GST *</Label>
              <Input type="file" name="gstFile" onChange={handleFile} required />
            </div>
            <div>
              <Label>Upload PAN *</Label>
              <Input type="file" name="panFile" onChange={handleFile} required />
            </div>
            <div>
              <Label>Upload MSME</Label>
              <Input type="file" name="msmeFile" onChange={handleFile} />
            </div>
          </div>

          <SheetFooter className="mt-6">
            <Button type="submit" style={{background:'#155DFC'}}>Add Supplier</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
