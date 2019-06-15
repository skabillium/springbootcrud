<template>
  <el-dialog
    type="warning"
    title="Διαχείριση Προμηθευτή"
    :visible="visible"
    :modal="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    :show-close="false"
    width="75%"
    @close="clearValidation"
  >
    <el-card>
      <el-form ref="supplierForm" :model="supplier" :rules="rules" label-position="top">
        <el-row :gutter="20">
          <!-- LEFT COLUMN -->
          <el-col :span="12">
            <el-form-item label="Εισάγετε το όνομα" prop="firstName">
              <el-input prefix-icon="fa fa-user" v-model="supplier.firstName" placeholder="Όνομα"></el-input>
            </el-form-item>

            <el-form-item label="Εισάγετε το επίθετο" prop="lastName">
              <el-input v-model="supplier.lastName" placeholder="Επίθετο"></el-input>
            </el-form-item>

            <el-form-item label="Εισάγετε το όνομα της εταιρείας" prop="companyName">
              <el-input v-model="supplier.companyName" placeholder="Όνομα εταιρείας"></el-input>
            </el-form-item>

            <el-form-item label="Εισάγετε αριθμό vat" prop="vatNumber">
              <el-input v-model="supplier.vatNumber" placeholder="Αριθμός vat"></el-input>
            </el-form-item>
          </el-col>

          <!-- RIGHT COLUMN -->
          <el-col :span="12">
            <el-form-item label="Εισάγετε γραφείο IRS" prop="irsOffice">
              <el-input v-model="supplier.irsOffice" placeholder="Γραφείο IRS"></el-input>
            </el-form-item>

            <el-form-item label="Εισάγετε διεύθυνση" prop="address">
              <el-input v-model="supplier.address" placeholder="Διεύθυνση"></el-input>
            </el-form-item>

            <el-form-item label="Εισάγετε ταχυδρομικό κώδικα" prop="zipCode">
              <el-input v-model="supplier.zipCode" placeholder="Ταχυδρομικός κώδικας"></el-input>
            </el-form-item>

            <el-form-item label="Εισάγετε πόλη" prop="city">
              <el-input v-model="supplier.city" placeholder="Πόλη"></el-input>
            </el-form-item>

            <el-form-item label="Εισάγετε χώρα" prop="country">
              <el-input v-model="supplier.country" placeholder="Χώρα"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-row>
        <el-col style="text-align: right">
          <el-button type="success" icon="fa fa-save" @click="save">Αποθήκευση</el-button>

          <el-button
            type="danger"
            icon="fa fa-remove"
            @click="confirmDelete"
            :disabled="!isDeletable"
          >Διαγραφή</el-button>
        </el-col>
      </el-row>
    </el-card>
    <div slot="footer" class="dialog-footer card-footer">
      <el-button type="warning" icon="el-icon-back" @click="cancel">Επιστροφή</el-button>
    </div>
  </el-dialog>
</template>

<script src="./SupplierVM.js">
</script>
