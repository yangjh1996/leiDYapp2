<script setup>
import { ref, computed, useSlots, nextTick, onMounted, watch } from 'vue'
	import { formatCls, isObject, getStyle, isTrue, isEmpty } from './util.js'
	const props = defineProps({
	modelValue: String | Number,
		// 文本框类型(text | password | textarea)
	type: String,
		// 尺寸(large | default | small)
		size: String,
	readonly: { type: [Boolean, String], default: false },
		disabled: { type: [Boolean, String] },
	clearable: { type: [Boolean, String] },
		// 是否切换密码
	showPassword: { type: [Boolean, String] },
	circle: { type: [Boolean, String] },
		// 搜索框(带搜索按钮输入框)
		search: { type: [Boolean, String], default: false },
		// 输入框左侧图标
	prefixIcon: String,
		// 输入框右侧图标
		suffixIcon: String,
		// 输入框占位文本
	placeholder: String,
	// 最大输入长度
		maxlength: { type: [String, Number], default: -1 },
	// 最大输入长度
		showCount: Boolean,
		// 原生name属性
	name: String,
	autofocus: Boolean,
		autosize: { type: [Boolean, Object] }
	})
	const emit = defineEmits([
	'update:modelValue','change','input','focus','blur',
		'clear','search','enter','mouseenter','mouseleave'
	])
	const slots = useSlots()

	const isDisabled = computed(() => isTrue(props.disabled))
const preClass = formatCls(props, 've__input--', ['type'])
	const isClass = formatCls(props, 'is-', ['search', 'readonly', 'clearable', 'circle'])
	const sizeClass = computed(() => props.size ? `ve__input--${props.size}` : '')
	// input | textarea对象
	const inputRef = ref()
const textareaRef = ref()
	const textareaCalcStyle = ref(null)
	const focused = ref(false)
const hovering = ref(false)
	const passwordVisible = ref(false)
	const _ref = computed(() => inputRef.value || textareaRef.value)
	const showClear = computed(() => 
	props.clearable && !isDisabled.value && !props.readonly && props.modelValue && (focused.value || hovering.value)
	)
const showPwdVisible = computed(() => 
	props.showPassword && !isDisabled.value && !props.readonly && (props.modelValue || focused.value)
	)
	const showSuffixVisible = computed(() =>
	slots.suffix || props.suffixIcon || showClear.value || props.showPassword || showLimitWordVisible.value
	)
const showLimitWordVisible = computed(() =>
	props.showCount && props.maxlength && !isDisabled.value && !props.readonly && !props.showPassword
	)

	const textareaStyle = computed(() => [
	textareaCalcStyle.value,
	])

	const inputLength = computed(() => props.modelValue.length)
	const handleMouseEnter = e => {
	hovering.value = true
		emit('mouseenter', e)
	}
	const handleMouseLeave = e => {
		hovering.value = false
	emit('mouseleave', e)
	}
	const handleFocus = e => {
	focused.value = true
		emit('focus', e)
	}

const handleBlur = e => {
	focused.value = false
		emit('blur', e)
	}
const handleInput = e => {
		const val = e.detail.value
	emit('update:modelValue', val)
	emit('input', val)
	}

	const handleChange = e => {
	emit('change', e.detail.value)
	}
const handleKeydown = e => {
		if (e.key == 'Enter' || e.keyCode == 13) {
	emit('enter', e)
		}
	}
	const handleClear = () => {
	emit('update:modelValue', '')
		emit('input', '')
	emit('change', '')
	emit('clear')
	}
	const handlePwdVisible = () => {
	passwordVisible.value = !passwordVisible.value
	}
	const handleSearch = e => {
		if (props.search) {
	emit('search', props.modelValue)
		}
	}
	const textareaAutoHeight = () => {
		if(!_ref.value) return
		if(!props.autosize) return
	if(isObject(props.autosize)) {
		textareaCalcStyle.value = {
		maxHeight: props.autosize.maxRows * 28 + 'px',
				overflow: 'auto'
			}
		}
	}
	onMounted(() => {
	nextTick(() => textareaAutoHeight())
	})

watch(() => props.modelValue, () => {
	nextTick(() => textareaAutoHeight())
	})
</script>

<template>
<div
	class="ve__input"
	:class="[
		preClass,isClass,sizeClass,
			{'is-disabled': isDisabled},
		{'is-resizable': type == 'textarea' && !autosize},
			{'ve__input--group': $slots.prepend || $slots.append},
		{'ve__input--group__prepend': $slots.prepend},
			{'ve__input--group__append': $slots.append}
		]"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
	>
			<div v-if="$slots.prepend" class="ve__input--prepend"><slot name="prepend" /></div>
			<div class="ve__input-wrapper">
				<div v-if="$slots.prefix || prefixIcon" class="ve__input--prefix">
				<span class="ve__input--prefix__inner">
					<slot name="prefix" />
						<i v-if="prefixIcon" class="iconfont" :class="prefixIcon"></i>
					</span>
				</div>
			<template v-if="type != 'textarea'">
				<input
				class="ve__input-inner"
						ref="inputRef"
					:type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
						:value="modelValue"
					:name="name"
						:maxlength="maxlength"
					:readonly="readonly"
						:disabled="isDisabled"
					:placeholder="placeholder"
					:cursor-spacing="15"
					:focus="autofocus"
						@focus="handleFocus"
					@blur="handleBlur"
						@input="handleInput"
					@change="handleChange"
						@keydown="handleKeydown"
					/>
			</template>
			<template v-else>
			<textarea
				class="ve__input-inner ve__textarea-inner"
						ref="textareaRef"
					:value="modelValue"
						:maxlength="maxlength"
					:readonly="readonly"
						:disabled="isDisabled"
					:placeholder="placeholder"
						:show-confirm-bar="false"
					:adjust-position="false"
					:cursor-spacing="15"
						:focus="autofocus"
					:auto-height="isTrue(autosize) || isObject(autosize)"
						:style="textareaStyle"
					@focus="handleFocus"
						@blur="handleBlur"
					@input="handleInput"
					@change="handleChange"
						@keydown="handleKeydown"
					/>
				</template>
				<div v-if="showSuffixVisible" class="ve__input--suffix" @click="handleSearch" @mousedown.prevent>
				<span class="ve__input--suffix__inner">
					<template v-if="!showClear || !showPwdVisible">
						<slot name="suffix" />
					<i v-if="suffixIcon" class="iconfont" :class="suffixIcon"></i>
						</template>
				<i v-if="showClear" class="iconfont ve-icon-close-circle ve__input-clear" @click="handleClear" @mousedown.prevent></i>
					<i v-if="showPwdVisible" class="iconfont ve-icon-hide ve__input-password" :class="{'ve-icon-eye1': passwordVisible}" @click="handlePwdVisible" @mousedown.prevent @mouseup.prevent></i>
				<em v-if="showLimitWordVisible" class="ve__input-limitword">{{inputLength}} / {{maxlength}}</em>
				</span>
		</div>
		</div>
	<div v-if="$slots.append" class="ve__input--append" @click="handleSearch" @mousedown.prevent><slot name="append" /></div>
	</div>
</template>

<style lang="scss" scoped>
	$color-primary: #409eff;
$color-info: #909399;
	$color-white: #fff;
	/*Hover/Active Color*/
$primary-outline-color: #d9ecff;
	$color-text-regular: #606266;
	$color-text-secondary: #909399;
	$color-text-placeholder: #c0c4cc;
	/*Border Color*/
$border-color-base: #dcdfe6;
	$border-color-light: #e4e7ed;
	$border-color-lighter: #ebeef5;
	$border-color-extra-light: #f2f6fc;
	/*Background*/
$background-color-base: #f5f7fa;
	/*Box-shadow*/
$box-shadow: 0 3px 9px rgba(0,0,0,.08), 0 3px 3px rgba(0,0,0,.04);
	$box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
	$box-shadow-light: 0 4px 12px -8px rgba(0, 0, 0, 0.1), 0 6px 18px 0 rgba(0, 0, 0, 0.06), 0 8px 24px 16px rgba(0, 0, 0, 0.03);
	$box-shadow-lighter: 0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.04), 0 12px 48px 16px rgba(0, 0, 0, 0.03);
	$border-width-base: 1px;
	$border-style-base: solid;
	$border-color-hover: $color-text-placeholder;
	$border-base: $border-width-base $border-style-base $border-color-base;
$border-radius-base: 4px;
	$border-radius-small: 2px;
	$border-radius-circle: 100%;
	$border-radius-zero: 0;
	$size-base: 14px;
$font-size-extra-large: 18px;
	$font-size-large: 16px;
	$font-size-base: 14px;
$font-size-small: 12px;
	$font-weight-primary: 500;
	$font-weight-secondary: 100;
$font-line-height-primary: 24px;
	$font-line-height-secondary: 16px;
$font-color-disabled-base: #bbb;
	$disabled-fill-base: $background-color-base;
$disabled-color-base: $color-text-placeholder;
	$disabled-border-base: $border-color-light;
	$height-base: 32px;
	$large-height-base: 40px;
	$small-height-base: 24px;
$input-font-size: $font-size-base;
	$input-font-color: $color-text-regular;
	$input-background-color: $color-white;
$input-fill-color: $background-color-base;
	$input-icon-color: $color-text-placeholder;
$input-icon-size: $font-size-base;
	$input-clear-color-hover: $color-text-secondary;
	$input-height: $height-base;
	$input-border: $border-base;
	$input-border-color: $border-color-base;
	$input-border-color-hover: $border-color-hover;
$input-border-radius: $border-radius-base;
	$input-disabled-fill: $disabled-fill-base;
	$input-disabled-color:$disabled-border-base;
	/*Size(large)*/
	$input-large-font-size: $font-size-base;
	$input-large-height: $large-height-base;
	/*Size(small)*/
	$input-small-font-size: $font-size-small;
	$input-small-height: $small-height-base;
	
	.ve__input {
	display: inline-flex;
		color: $input-font-color;caret-color: $color-primary;cursor: text;font-size: $input-font-size;
		box-sizing: border-box;padding: 0;height: $input-height;
		line-height: $input-height;width: 100%;position: relative;
	}
	.ve__input-wrapper {
	display: inline-flex;flex-grow: 1;align-items: center;
		justify-content: center;background-color: $input-background-color;
		background-image: none;border: $input-border;
	border-radius: $input-border-radius;box-sizing: border-box;
		overflow: hidden;padding: 1px 11px;
		transition: background-color .2s, border-color .2s, box-shadow .2s;
	}
	.ve__input-wrapper:hover {border-color: $input-border-color-hover;}
	.ve__input.is-focus .ve__input-wrapper, .ve__input-wrapper:focus-within {
	border-color: $color-primary;box-shadow: 0 0 0 2px $primary-outline-color;
		z-index: 11;
	}
	.ve__input-inner {
		background: none;
	color: $input-font-color;
		font-size: inherit;font-family: system-ui;
		border: 0;
	outline: none;box-sizing: border-box;padding: 0;text-align: inherit;
		height: calc(100% - 2px);line-height: calc(100% - 2px);width: 100%;
		appearance: none;
		-webkit-appearance: none;
	}
.ve__input-inner::placeholder {color: $color-text-placeholder;}
	.ve__input--group {
	display: inline-flex;align-items: stretch;
		width: 100%;
	}
	.ve__input--group__prepend>.ve__input-wrapper {
	border-top-left-radius: 0;border-bottom-left-radius: 0;
	}
	.ve__input--group__append>.ve__input-wrapper {
	border-top-right-radius: 0;border-bottom-right-radius: 0;
	}
.ve__input--group>.ve__input-wrapper:hover {position: relative; z-index: 10;}
	/*输入框前后缀*/
	.ve__input--prepend, .ve__input--append {
		display: inline-flex;
		align-items: center;justify-content: center;background-color: $input-fill-color;
		color: $color-info;border: $input-border;border-radius: $input-border-radius;padding: 0 11px;white-space: nowrap;
		position: relative;
	}
	.ve__input--prepend {
	border-right-width: 0;border-top-right-radius: 0;border-bottom-right-radius: 0;
	}
	.ve__input--append {
	border-left-width: 0;border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	/*输入框前后缀含有select*/
.ve__input--prepend .ve__select, .ve__input--append .ve__select {
	margin: 0 -11px;
	}
	.ve__input--prepend .ve__select .ve__input-wrapper, .ve__input--append .ve__select .ve__input-wrapper {
		background-color: inherit;
		margin: 0 -1px;
	}
.ve__input--prepend .ve__select .ve__input-wrapper {
		border-top-right-radius: 0;border-bottom-right-radius: 0;
	}
	.ve__input--append .ve__select .ve__input-wrapper {
	border-top-left-radius: 0;border-bottom-left-radius: 0;
	}
	
	/*文本框前后图标*/
	.ve__input--prefix, .ve__input--suffix {
		display: inline-flex;flex-shrink: 0;flex-wrap: nowrap;
		white-space: nowrap;color: $input-icon-color;font-size: $input-icon-size;text-align: center;
		height: 100%;
	}
	.ve__input--prefix__inner, .ve__input--suffix__inner {
		display: inline-flex;align-items: center;
		justify-content: center;
	}
.ve__input-clear, .ve__input-password {color: $input-icon-color; cursor: pointer; transition: all .3s;}
	.ve__input-limitword {color: $input-icon-color; font-size: 12px;}
	.ve__input-clear:hover, .ve__input-password:hover {color: $input-clear-color-hover;}
	.ve__input.is-search .ve__input--append {border: 0; padding: 0;}
	.ve__input.is-search .ve__input--append .ve__button {
	border-top-left-radius: 0;border-bottom-left-radius: 0;font-size: inherit;
	margin-left: -1px;padding-top: 0;padding-bottom: 0;
		height: 100%;
	}
.ve__input.is-readonly, .ve__input.is-readonly .ve__input-inner {cursor: default;}
	.ve__input.is-disabled {cursor: not-allowed;}
	.ve__input.is-disabled .ve__input-wrapper {background-color: $input-disabled-fill; border-color: $input-disabled-color;}
	.ve__input.is-disabled .ve__input-wrapper:hover {border-color: $input-disabled-color;}
	.ve__input.is-disabled .ve__input-inner {color: $input-disabled-color; cursor: not-allowed;}
	.ve__input.is-circle .ve__input-wrapper {border-radius: 100px;}
	
	/*size*/
	.ve__input--large {
	font-size: $input-large-font-size;height: $input-large-height;line-height: $input-large-height;
	}
	.ve__input--large .ve__input-wrapper {padding: 1px 15px;}
	.ve__input--small {
	font-size: $input-small-font-size;
		height: $input-small-height;line-height: $input-small-height;
	}
	.ve__input--small .ve__input-wrapper {padding: 1px 7px;}
	.ve__input--textarea {height: auto; line-height: unset;}
.ve__input--textarea .ve__input-wrapper {padding: 8px 11px;}
	.ve__input--textarea.is-resizable .ve__input-wrapper {resize: vertical; min-height: $input-height;}
.ve__input--textarea .ve__textarea-inner {font-family: arial; resize: none; overflow: auto; line-height: 16.8px;}
	.ve__input--textarea .ve__input-limitword {position: absolute; bottom: 9px; right: 18px;}
.ve__input--textarea .ve__textarea-inner::-webkit-scrollbar {height:5px; width:5px;}
	.ve__input--textarea .ve__textarea-inner::-webkit-scrollbar-track {background-color: #f3f3f3;}
.ve__input--textarea .ve__textarea-inner::-webkit-scrollbar-track-piece {background: #f3f3f3;}
.ve__input--textarea .ve__textarea-inner::-webkit-scrollbar-thumb {background:rgba(0,0,0,.3); border-radius:15px; min-height:15px; width:3px; transition:all .3s;}
.ve__input--textarea .ve__textarea-inner::-webkit-scrollbar-thumb:hover {background:rgba(0,0,0,.4)}
	.ve__input--textarea .ve__textarea-inner::-webkit-scrollbar-thumb:active {background:rgba(0,0,0,.5)}
</style>
