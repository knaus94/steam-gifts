import { EPurchaseResultDetail } from 'steam-user';

export enum TransactionStatusEnum {
	Declined = 'Declined',
	None = 'None',
	Invalid = 'Invalid',
}

export const PurchaseResultTranslations: Record<EPurchaseResultDetail, string> = {
	[EPurchaseResultDetail.NoDetail]: 'No additional details',
	[EPurchaseResultDetail.AVSFailure]: 'Address Verification System (AVS) failure',
	[EPurchaseResultDetail.InsufficientFunds]: 'Insufficient funds in the account',
	[EPurchaseResultDetail.ContactSupport]: 'Please contact customer support',
	[EPurchaseResultDetail.Timeout]: 'Transaction timed out',
	[EPurchaseResultDetail.InvalidPackage]: 'Invalid package',
	[EPurchaseResultDetail.InvalidPaymentMethod]: 'Invalid payment method',
	[EPurchaseResultDetail.InvalidData]: 'Invalid data provided',
	[EPurchaseResultDetail.OthersInProgress]: 'Other transaction in progress',
	[EPurchaseResultDetail.AlreadyPurchased]: 'Item or package already purchased',
	[EPurchaseResultDetail.WrongPrice]: 'Incorrect price',
	[EPurchaseResultDetail.FraudCheckFailed]: 'Fraud check failed',
	[EPurchaseResultDetail.CancelledByUser]: 'Cancelled by the user',
	[EPurchaseResultDetail.RestrictedCountry]: 'Purchase restricted in the country',
	[EPurchaseResultDetail.BadActivationCode]: 'Invalid activation code',
	[EPurchaseResultDetail.DuplicateActivationCode]: 'Duplicate activation code',
	[EPurchaseResultDetail.UseOtherPaymentMethod]: 'Please use another payment method',
	[EPurchaseResultDetail.UseOtherFunctionSource]: 'Use another function source',
	[EPurchaseResultDetail.InvalidShippingAddress]: 'Invalid shipping address',
	[EPurchaseResultDetail.RegionNotSupported]: 'Region not supported',
	[EPurchaseResultDetail.AcctIsBlocked]: 'Account is blocked',
	[EPurchaseResultDetail.AcctNotVerified]: 'Account not verified',
	[EPurchaseResultDetail.InvalidAccount]: 'Invalid account',
	[EPurchaseResultDetail.StoreBillingCountryMismatch]: 'Store and billing country mismatch',
	[EPurchaseResultDetail.DoesNotOwnRequiredApp]: 'Does not own required app',
	[EPurchaseResultDetail.CanceledByNewTransaction]: 'Cancelled by new transaction',
	[EPurchaseResultDetail.ForceCanceledPending]: 'Force canceled pending',
	[EPurchaseResultDetail.FailCurrencyTransProvider]: 'Failed currency transfer provider',
	[EPurchaseResultDetail.FailedCyberCafe]: 'Failed cyber cafe',
	[EPurchaseResultDetail.NeedsPreApproval]: 'Needs pre-approval',
	[EPurchaseResultDetail.PreApprovalDenied]: 'Pre-approval denied',
	[EPurchaseResultDetail.WalletCurrencyMismatch]: 'Wallet currency mismatch',
	[EPurchaseResultDetail.EmailNotValidated]: 'Email not validated',
	[EPurchaseResultDetail.ExpiredCard]: 'Expired card',
	[EPurchaseResultDetail.TransactionExpired]: 'Transaction expired',
	[EPurchaseResultDetail.WouldExceedMaxWallet]: 'Would exceed max wallet',
	[EPurchaseResultDetail.MustLoginPS3AppForPurchase]: 'Must login PS3 app for purchase',
	[EPurchaseResultDetail.CannotShipToPOBox]: 'Cannot ship to PO box',
	[EPurchaseResultDetail.InsufficientInventory]: 'Insufficient inventory',
	[EPurchaseResultDetail.CannotGiftShippedGoods]: 'Cannot gift shipped goods',
	[EPurchaseResultDetail.CannotShipInternationally]: 'Cannot ship internationally',
	[EPurchaseResultDetail.BillingAgreementCancelled]: 'Billing agreement cancelled',
	[EPurchaseResultDetail.InvalidCoupon]: 'Invalid coupon',
	[EPurchaseResultDetail.ExpiredCoupon]: 'Expired coupon',
	[EPurchaseResultDetail.AccountLocked]: 'Account locked',
	[EPurchaseResultDetail.OtherAbortableInProgress]: 'Other abortable in progress',
	[EPurchaseResultDetail.ExceededSteamLimit]: 'Exceeded Steam limit',
	[EPurchaseResultDetail.OverlappingPackagesInCart]: 'Overlapping packages in cart',
	[EPurchaseResultDetail.NoWallet]: 'No wallet',
	[EPurchaseResultDetail.NoCachedPaymentMethod]: 'No cached payment method',
	[EPurchaseResultDetail.CannotRedeemCodeFromClient]: 'Cannot redeem code from client',
	[EPurchaseResultDetail.PurchaseAmountNoSupportedByProvider]: 'Purchase amount not supported by provider',
	[EPurchaseResultDetail.OverlappingPackagesInPendingTransaction]: 'Overlapping packages in pending transaction',
	[EPurchaseResultDetail.RateLimited]: 'Rate limited',
	[EPurchaseResultDetail.OwnsExcludedApp]: 'Owns excluded app',
	[EPurchaseResultDetail.CreditCardBinMismatchesType]: 'Credit card BIN mismatches type',
	[EPurchaseResultDetail.CartValueTooHigh]: 'Cart value too high',
	[EPurchaseResultDetail.BillingAgreementAlreadyExists]: 'Billing agreement already exists',
	[EPurchaseResultDetail.POSACodeNotActivated]: 'POSA code not activated',
	[EPurchaseResultDetail.CannotShipToCountry]: 'Cannot ship to country',
	[EPurchaseResultDetail.HungTransactionCancelled]: 'Hung transaction cancelled',
	[EPurchaseResultDetail.PaypalInternalError]: 'Paypal internal error',
	[EPurchaseResultDetail.UnknownGlobalCollectError]: 'Unknown Global Collect error',
	[EPurchaseResultDetail.InvalidTaxAddress]: 'Invalid tax address',
	[EPurchaseResultDetail.PhysicalProductLimitExceeded]: 'Physical product limit exceeded',
	[EPurchaseResultDetail.PurchaseCannotBeReplayed]: 'Purchase cannot be replayed',
	[EPurchaseResultDetail.DelayedCompletion]: 'Delayed completion',
	[EPurchaseResultDetail.BundleTypeCannotBeGifted]: 'Bundle type cannot be gifted',
	[EPurchaseResultDetail.BlockedByUSGov]: 'Blocked by US government',
	[EPurchaseResultDetail.ItemsReservedForCommercialUse]: 'Items reserved for commercial use',
	[EPurchaseResultDetail.GiftAlreadyOwned]: 'Gift already owned',
	[EPurchaseResultDetail.GiftInvalidForRecipientRegion]: 'Gift invalid for recipient region',
	[EPurchaseResultDetail.GiftPricingImbalance]: 'Gift pricing imbalance',
	[EPurchaseResultDetail.GiftRecipientNotSpecified]: 'Gift recipient not specified',
	[EPurchaseResultDetail.ItemsNotAllowedForCommercialUse]: 'Items not allowed for commercial use',
	[EPurchaseResultDetail.BusinessStoreCountryCodeMismatch]: 'Business store country code mismatch',
	[EPurchaseResultDetail.UserAssociatedWithManyCafes]: 'User associated with many cafes',
	[EPurchaseResultDetail.UserNotAssociatedWithCafe]: 'User not associated with cafe',
	[EPurchaseResultDetail.AddressInvalid]: 'Address invalid',
	[EPurchaseResultDetail.CreditCardNumberInvalid]: 'Credit card number invalid',
	[EPurchaseResultDetail.CannotShipToMilitaryPostOffice]: 'Cannot ship to military post office',
	[EPurchaseResultDetail.BillingNameInvalidResemblesCreditCard]: 'Billing name invalid, resembles credit card',
	[EPurchaseResultDetail.PaymentMethodTemporarilyUnavailable]: 'Payment method temporarily unavailable',
	[EPurchaseResultDetail.PaymentMethodNotSupportedForProduct]: 'Payment method not supported for product',
};
