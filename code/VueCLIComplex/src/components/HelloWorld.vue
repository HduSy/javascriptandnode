<template>
	<div class="hello">
		<el-header>
			<div>header</div>
		</el-header>
		<el-main>
			<el-table border stripe tooltip-effect="dark" :data="products" v-loading="tableLoading">
				<el-table-column prop="productId" label="商品ID" align="center"></el-table-column>
				<el-table-column prop="productName" label="商品名" align="center"></el-table-column>
				<el-table-column prop="productPrice" label="商品价格" align="center"></el-table-column>
				<el-table-column prop="productRepertory" label="商品库存" align="center"></el-table-column>
				<el-table-column label="操作" align="center">
					<template #default="scope">
						<el-button type="success" size="small" @click="showAddview">增加</el-button>
						<el-button type="danger" size="small" @click="delItem(scope.row)">删除</el-button>
						<el-button type="warning" size="small" @click="editItem(scope.row)">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-main>
		<el-form :model="product">
			<div style="text-align: left">
				<el-dialog width="70%" :title="dialogTitle" :visible.sync="dialogVisible">
					<el-row style="padding-left: 40px">
						<el-col :span="6">
							<el-form-item prop="" label="商品ID：">
								<el-input v-model="product.productId" size="small" style="width: 150px"
										  prefix-icon="el-icon-edit"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item prop="" label="商品名：">
								<el-input v-model="product.productName" size="small" style="width: 150px"
										  prefix-icon="el-icon-edit"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item prop="" label="商品价格：">
								<el-input v-model="product.productPrice" size="small" style="width: 150px"
										  prefix-icon="el-icon-edit"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item prop="" label="商品库存：">
								<el-input v-model="product.productRepertory" size="small" style="width: 150px"
										  prefix-icon="el-icon-edit"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<template v-slot:footer>
						<el-button size="large" @click="emptyPro">取消</el-button>
						<el-button type="primary" @click="addProduct">确定</el-button>
					</template>
				</el-dialog>
			</div>
		</el-form>
		<el-footer>
			<div>footer</div>
		</el-footer>
	</div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                products: [],
                product: {
                    _id: null,
                    productId: null,
                    productName: null,
                    productPrice: null,
                    productRepertory: null
                },
                tableLoading: false,
                dialogTitle: '',
                dialogVisible: false,

            }
        },
        methods: {
            loadProducts() {
                this.tableLoading = true
                this.getRequest('/products').then(res => {
                    this.tableLoading = false
                    if (res.data.status === 0) {
                        this.products = res.data.data.list
                    }
                })
            },
            emptyPro() {
                this.dialogVisible = false
                Object.keys(this.product).forEach(key => this.product[key] = null)
            },
            showAddview() {
                this.dialogVisible = true
                this.dialogTitle = '新增产品'
            },
            addProduct() {
                this.dialogVisible = false
                this.tableLoading = true
                this.postRequest('/products', this.product).then(res => {
                    this.tableLoading = false
                    if (res.data.status === 1) {
                        this.emptyPro()
                        this.loadProducts()
                    }
                })
            },
            delItem(row) {
                this.$confirm('确定删除商品' + row.productName + '?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'danger'
                }).then(() => {
                    this.tableLoading = true
                    this.deleteRequest('/products', row).then(res => {
                        this.tableLoading = false
                        if (res.data.status === 2) {
                            this.loadProducts()
                        }
                    })
                }).catch(() => {
                })
            },
            editItem(row) {
                console.log(row)
            }
        },
        mounted() {
            this.loadProducts()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
